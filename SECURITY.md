# Security Policy

## Supported Versions

This project maintains a single release line. The latest commit on `main` is always the current published version — there are no parallel versions or legacy branches receiving backports.

| Version | Supported |
| ------- | --------- |
| `main` (latest) | ✅ |
| Any previous commit | ❌ |

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Instead, report them privately via one of the following:

- **GitHub Private Vulnerability Reporting** *(preferred)*
  Use the [Report a vulnerability](../../security/advisories/new) button in the Security tab of this repository.
- **Email**
  Send details to the maintainer directly. Check the `package.json` or commit history for contact information.

### What to include

A good report helps fix things faster. Please include:

- A clear description of the vulnerability and its potential impact
- Steps to reproduce or a proof-of-concept
- Affected file(s) or dependency, if known
- Any suggested fix or mitigation, if you have one

### What to expect

- **Acknowledgement** within 48 hours
- **Assessment** (confirmed, disputed, or out of scope) within 5 business days
- **Fix and release** as soon as possible — since there is only one version, a patch goes straight to `main` and is published immediately
- Credit in the README or a public acknowledgement if you'd like it (just let me know)

## Dependency Vulnerabilities

This project uses [Dependabot](https://docs.github.com/en/code-security/dependabot) to monitor dependencies for known CVEs. Security patches are applied automatically via pull requests as soon as a vulnerability is registered in the GitHub Advisory Database.

If you spot a vulnerability in a dependency that Dependabot hasn't caught yet, please report it the same way as above.

## Scope

| In scope | Out of scope |
| -------- | ------------ |
| Vulnerabilities in this codebase | Vulnerabilities in upstream dependencies (report those upstream) |
| Security misconfigurations | General bugs without security impact |
| Dependency vulnerabilities not yet caught by Dependabot | Feature requests |
