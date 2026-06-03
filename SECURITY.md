# Security Policy

## Reporting a vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Report security issues privately so we can investigate and fix them before disclosure.

### What to report

- Cross-site scripting (XSS)
- Malicious or unsafe scripts in components or demos
- Dependency vulnerabilities with real exploit paths
- Sensitive data exposure (API keys, tokens, credentials in code or commits)
- Unsafe redirects or open redirects in app routes
- Any issue that could compromise users or the deployment

### How to report

Contact the maintainers privately (email or agreed private channel). Include:

1. Description of the issue
2. Steps to reproduce
3. Impact assessment
4. Suggested fix (if you have one)

We will acknowledge receipt and work on a fix. Please allow reasonable time before public disclosure.

## Safe contribution practices

- Never commit `.env`, API keys, or tokens
- Do not add third-party scripts without review
- Prefer dependencies with active maintenance
- Run `npm run lint` and `npm run test` before submitting PRs
- Avoid `dangerouslySetInnerHTML` unless strictly necessary and sanitized

## Supported versions

Security fixes are applied on the default branch (`main`) and released as soon as practical.
