+++
title = "Password Profiler: guessing a password from a profile"
date = 2026-11-22
description = "An OSINT-based CTF password search, the guesses that failed, and the SHA-1 match that confirmed the result."
[taxonomies]
topics = ["cylab"]
[extra]
kind = "CTF write-up"
+++

{% raw %}
Password Profiler provides a personal profile and a SHA-1 hash. The task is to recover the password by generating guesses from the profile and comparing their hashes. The useful part of this challenge is deciding what to guess—and recognizing when a plausible explanation goes beyond the evidence.

**Spoiler:** this write-up includes the recovered password and flag.

## Challenge and supplied files

The supplied challenge description credits Yahaya Meddy and labels the challenge General Skills, Easy, picoCTF 2026. Its files are hosted on CyLab Academy:

- [userinfo.txt](https://challenge-files.cylabacademy.net/library/eee2a66921bd7ab65c6464f5293a9d15cc01c8631a0dc4c9668db8a2525639fc/userinfo.txt): the target profile.
- [hash.txt](https://challenge-files.cylabacademy.net/library/eee2a66921bd7ab65c6464f5293a9d15cc01c8631a0dc4c9668db8a2525639fc/hash.txt): the target digest.
- [check_password.py](https://challenge-files.cylabacademy.net/library/eee2a66921bd7ab65c6464f5293a9d15cc01c8631a0dc4c9668db8a2525639fc/check_password.py): a wordlist checker.

The profile contains:

| Field | Value |
| --- | --- |
| First name | Alice |
| Surname | Johnson |
| Nickname | AJ |
| Birthdate | 15-07-1990 |
| Partner | Bob |
| Child | Charlie |

The target hash is:

```text
3d92bc3071ba0fb04cf57eaabc3d23135dbce2d0
```

All attempts described here were offline comparisons against this supplied CTF hash. No additional personal information was needed.

## Reading the checker

The checker reads `hash.txt` and a wordlist named `passwords.txt`. For each stripped line, it calculates:

```python
hashlib.sha1(password.encode()).hexdigest()
```

It compares that digest with the supplied hash. There is no salt or additional transformation in the checker. A comment mentions CUPP as a wordlist generator, but CUPP is not required: any generator that produces the matching candidate will work.

The success message also establishes the flag format:

```python
print(f"Password found: academy{{{result}}}")
```

The doubled braces are Python f-string escaping. The printed flag has one opening and one closing brace around the password.

## What failed before the match

The first searches used profile names, capitalization variants, birthday components, separators, and common suffixes. A broader pass tried pairs of names, more date permutations, and reversed names. Another pass tested common substitutions such as `a` to `4` and `e` to `3`.

These searches found no match. That ruled out those particular candidate sets; it did not prove that the password was unrelated to the profile.

The successful pass included pairs of profile names followed by integers from `0` through `9999`. It found:

```text
alice + aj + 7515 = aliceaj7515
```

The first two pieces are supported by the profile. The reason for `7515` is unknown. Although it is tempting to explain every digit using the birthday, the actual evidence is that numeric-suffix enumeration found it.

## Reproducing the successful search

This is a smaller reproduction of the successful name-pair and numeric-suffix search. It uses Python's standard library and does not execute the supplied checker or require a downloaded wordlist.

```python
import hashlib

TARGET = "3d92bc3071ba0fb04cf57eaabc3d23135dbce2d0"
profile_words = ["alice", "johnson", "aj", "bob", "charlie"]

def search():
    for first in profile_words:
        for second in profile_words:
            for number in range(10_000):
                candidate = f"{first}{second}{number}"
                digest = hashlib.sha1(candidate.encode("utf-8")).hexdigest()
                if digest == TARGET:
                    return candidate
    return None

password = search()
if password is None:
    print("No match in this candidate set.")
else:
    print(f"Password: {password}")
    print(f"Flag: academy{{{password}}}")
```

This bounded set contains at most 250,000 candidates: five choices for each name and 10,000 suffixes. It is much smaller than enumerating every character combination of the same length. The snippet documents the reduced search; the original successful run used Node.js.

## Verifying the result

The Node.js search found the candidate, and a separate PowerShell/.NET SHA-1 calculation confirmed the same digest:

```text
Password: aliceaj7515
SHA1:     3d92bc3071ba0fb04cf57eaabc3d23135dbce2d0
Matches supplied hash: True
```

Therefore the flag, using the format in the checker, is:

```text
academy{aliceaj7515}
```

The hash comparison was verified locally. Acceptance by the challenge platform has not been tested.

## What this demonstrates

The password was recovered by guessing candidates and hashing them. SHA-1 was not decrypted. Profile information made the search smaller by suggesting likely building blocks.

For password choice, combining a name and nickname with a short numeric suffix still produces a guessable pattern. A password manager can generate unrelated passwords without relying on personal details.

For password storage, a fast, unsalted hash lets an attacker test guesses cheaply after obtaining the digest. A dedicated password-hashing scheme with a unique salt and an appropriate work factor addresses that storage problem; it does not make a predictable password a good choice.

## How this write-up was checked

This solve used AI assistance to inspect the supplied files and generate candidates. The result was checked against the original digest with a second implementation. Failed searches and the unknown origin of the suffix are retained here so the explanation stays tied to what was actually observed.
{% endraw %}
