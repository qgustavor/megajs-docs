---
sidebar_position: 10
---

# Security

MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:

## MEGA is only as secure as the clients

Because MEGA uses end-to-end cryptography the server cannot detect if a client is leaking keys or using weak crypto. There was in the past at least one popular third-party MEGA client that failed to generate secure cryptographic keys, hurting security and privacy. This library tries to be safe by [secure-random](https://www.npmjs.com/package/secure-random) for key generation and by testing cryptographic functions.

To avoid this issue do not set a `key` while uploading or creating folders and let the library generate a random key unless you have a really good reason for so (example: the code that tests the `Storage` class uses a fixed key because them the results are deterministic).

Notice that even if MEGA claims that is better to trust their code and do not use third party clients that are not based on their code, they even cite the same client above in their documentation as an example. In the other MEGA itself is not perfect: [their own extension was backdoored once](https://www.secjuice.com/mega-nz-chrome-browser-extension-backdoored/).

This client implementation not supporting as many features other clients support might sound to be a bad thing, but in fact it works in favor of security: you can read [the entire code of the library](https://unpkg.com/megajs/dist/main.node-es.mjs) in one hour (134 words a minute), in the other hand, keeping the same reading rate, [just the first file from the official MEGA web client](https://raw.githubusercontent.com/meganz/webclient/master/secureboot.js) would more than two hours to read. Because of that the attack surface in MEGAJS is way smaller in comparison with other clients and anyone worried about security can easily check it by reading the source, something which is almost impossible with the official web client.

## Logged sessions are not safe when used in web pages

A website is only safe as if the server serving it isn't compromised. Doesn't matter if you use HTTPS or even if there is client-side checksum checks - like happens in the official MEGA client - because if some of the checked resources can be tampered nothing stops the verification script also being tampered. There are many reasons many people said JavaScript crypto is bad and this point that was one that not improved with the time.

In other words: avoid using the `Storage` class in a web page if you want to be safe.

Or just assume the risk and try to convince people you are absolutely not injecting something to get your encryption keys like MEGA. Throw some <del>snake oil</del> <em>totally safe</em> checksum verification just to be sure.

## MEGA uses insecure HTTP by default when transferring encrypted data

To add insult to injury MEGA's official and most third-party clients do not use HTTPS when transferring encrypted data in order to reduce CPU usage. While the MEGA's own encryption help protect privacy, it's less secure than using HTTPS because encrypted files use static keys: once the contents of some file in MEGA gets known this default behavior allows anyone that can listen to network traffic to know if someone downloaded it. It gets worse when bugged clients are used, as some use weak encryption keys, like shown above, making it easier to interceptors to decrypt data.

HTTPS do not have this issue because encryption keys are not static, so even if the contents of a certain file get published, someone intercepting traffic can not know if someone download that file, at most can only guess from the file size.

Since MEGA servers support HTTPS it can be used to mitigate this issue: this library allows forcing HTTPS when downloading and uploading by setting `forceHttps` to `true`. In the other hand, sometimes forcing HTTPS result connections being dropped as MEGA insists that HTTPS should not be used when possible to save server resources. But that don't works with Deno because MEGA servers use outdated TLS settings which are not supported by Deno, so downloading and uploading with Deno will **always** use HTTP. Which is ironic because both MEGA and Deno try to "look" safe, but their combination is this mess. Although the biggest fault is on MEGA.

## File integrity can only be checked after the entire file is downloaded

MEGA checks file integrity by:

1. Splitting files in chunks;
2. Generating message authentication code (MAC) using AES-ECBC-MAC for each chunk;
3. Generating a final MAC using AES-ECBC-MAC which is stored in the file key.

Because only the final key is stored chunks cannot be verified, only fully downloaded files. Looks like the initial idea was to store individual chunk MACs so individual chunks could be checked, but currently MEGA does not do that. Maybe, in future, this feature will be implemented in the official clients, then in this library.

## Encryption is optional in some cases

This library do not require that shared files and folders to have a key specified, in this case data that depend on the key cannot be accessed, like file names and file content, but file sizes and dates can still be accessed. It allows using the library to open a shared folder and react to changes on it without requiring users to reveal the encryption key and the file contents.

You can also upload files without using encryption on file contents, [as documented here](advanced.md#uploading-without-encryption), which makes MEGA behave like most file hosts. Maybe you are uploading some data that don't need any privacy by any means, like data that's mean to be shared in a public website. In the other hand it breaks compatibility with every other MEGA client.

## Some data is not encrypted (for good reasons)

E-mails cannot be encrypted because the server needs it to login and replacing e-mails with some other identifier (like usernames or public keys) would make MEGA operations harder. Passwords are never sent to the server, instead authentication is done using a public-private RSA key pair where the server knows the public key and the private key is encrypted with the user password.

File dates are not encrypted and encrypting those would be useless as the server could log those anyway. Which files and folders are shared are known to the server otherwise how could it make those accessible to other users? File sizes are known to the server as those are hard to hide from the server. If you wish you can try to obfuscate those by adding paddings, but them it will waste your storage size.

File hierarchy is known to the server. Looks like it makes implementing the service simpler. In the other hand you can just upload everything to `storage.root` and use `folder name/file name.txt` as file names if you wish (this library do not enforce character restrictions on file names, unlike official clients, it only requires file names to not be empty).
