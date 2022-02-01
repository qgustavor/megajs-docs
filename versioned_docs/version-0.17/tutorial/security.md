---
sidebar_position: 8
---

# Security

Mega is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:

## Mega is only as secure as the clients

Because Mega uses end-to-end cryptography the server cannot detect if a client is leaking keys or using weak crypto. There was in the past at least one popular third-party Mega client that failed to generate secure cryptographic keys, hurting security and privacy. This library tries to be safe by [secure-random](https://www.npmjs.com/package/secure-random) for key generation and by testing cryptographic functions.

To avoid this issue do not set a `key` while updating unless you have a really good reason for so (example: the code that tests the `Storage` class uses a fixed key because them the results are deterministic).

## Logged sessions are not safe when used in web pages

A website is only safe as if the server serving it isn't compromised. Doesn't matter if you use HTTPS or even if there is client side checksum checks because if some of the checked resources can be tampered nothing stops the verification script also being tampered.

In other words: avoid using the `Storage` class in a web page.

## Mega uses insecure HTTP by default when transferring encrypted data

In order to reduce CPU usage Mega's official and most third-party clients do not use HTTPS when transferring encrypted data. While the encryption help protect privacy, because encrypted files, unlike HTTPS, use static keys, it's less secure than using HTTPS. While it protects the data from being decrypted, after the data or the key is known this default behavior allows anyone that can listen to network traffic to know if someone downloaded this data. It gets worse when bugged clients are used, as some use weak encryption keys.

To mitigate this issue this library allows forcing HTTPS when downloading and uploading by setting `forceHttps` to true. In the other hand, sometimes forcing HTTPS result connections being dropped as Mega insists that HTTPS should not be used when possible to save server resources.

## Encryption is optional in some cases

This library do not require that shared files and folders to have a key specified, in this case data that depend on the key cannot be accessed, like file names and file content, but file sizes and dates can still be accessed. It allows using the library to open a shared folder and react to changes on it without requiring users to reveal the encryption key and the file contents.

You can also upload files without using encryption on file contents, [as documented here](advanced.md#uploading-without-encryption), which makes Mega behave like most file hosts. Maybe you are uploading some data that don't need any privacy by any means. In the other hand it breaks compatibility with every other Mega client.
