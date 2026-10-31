# Blackvale institutional redesign

Local work only, branch `design/institutional-redesign`, based on `03cbe84`.
No commit, push, merge, production deployment, credential, DNS, or authentication infrastructure changes.

## Review

Run `npm ci`, then `WATCHPACK_POLLING=true npm run dev -- --hostname localhost` and open http://localhost:3000. Polling is useful on the Windows-mounted checkout, where file notifications were unreliable during verification.
Default A: `/`. Architectural B: `/?hero=b` (development only; production always renders A).

A gives the headline and negative space priority. B introduces an original CSS architectural composition on the right third. A remains the recommended default: clearer hierarchy and less visual competition, especially on small screens. The stewardship composition is also original CSS, not company property or a photograph.

## Scope and structure

- `app/page.tsx`: six-section editorial homepage, factual organization JSON-LD.
- `app/globals.css`: centralized palette, responsive layout, interactions and reduced-motion rules.
- `app/layout.tsx`: self-hosted Instrument Serif/Geist, factual metadata, canonical www domain; existing Clerk provider retained.
- `components/marketing/{Nav,Hero,Footer,Architecture}.tsx`: simplified composition and native modal mobile navigation. Native dialog plus explicit first/last focus wrapping handles keyboard trapping and Escape. Only navigation requires client JavaScript.
- `lib/blackvaleSiteConfig.ts`: single content/configuration source, including contact verification gate.
- `lib/blackvaleContent.ts`: compatibility re-export without obsolete claims.
- `app/dashboard/page.tsx`: authenticated development status, no fabricated financial data; currentUser check and Clerk controls retained.
- `public/fonts`: self-hosted fonts and their SIL Open Font Licenses.
- Retired 19 superseded marketing components: CriteriaSection, FadeInUp, FinalCTA, FirmSection, GovernanceSection, InsightsSection, LeadershipSection, MetricsBand, OverviewSection, PartnersSection, PlatformSection, Section, SectorTicker, SectorsSection, StewardshipSection, StrategiesSection, StrategiesTabs, StrategySection, TrustedStrip; unused `lib/designSystem.ts` retired. Git history preserves prior implementations. Existing dependencies were not removed or upgraded.

## Design

Obsidian #111719, warm ivory #F2EFE8, soft white #FBFAF7, warm stone #C0B5A3, muted brass #BCA987, primary ink #17201F. Slate darkened to #56615E for body-text contrast. Instrument Serif regular/italic headlines; Geist body/UI. Desktop headline up to 104px, section headings up to 64px, 24px mobile gutters, up to 80px desktop gutters, content width up to 1360px within a 1520px outer shell. Native anchor navigation, 180–200ms link treatments, 450ms hero entrance, visible content without JS, reduced-motion override. No autoplay, external imagery, or new runtime dependency.

## Content audit and factual boundaries

Removed from source and rendering: $2M+ AUM, two portfolio companies, $20M–$500M+ revenue criteria, $5M–$100M+ EBITDA criteria, large transaction assumptions, active acquisition/ownership claims, proven shared services and playbooks, immediate operating resources, board/talent capabilities, formal governance/risk framework claims, decades of leadership experience, placeholder biographies, dated Insights and case studies. Dashboard no longer promises investment reporting or displays mock values.

Current positioning reflects the owner's stated company identity and development stage. Acquisitions and a diversified platform are long-term objectives; industrials, services, and technology are interests; operating discipline and technology are guiding principles. None implies completed deals, funds under management, verified performance, or regulated investment services. No new factual operating accomplishments were introduced.

Owner confirmed contact@blackvaleholdings.com is NOT active and requested retaining the address. It is visible with a clear inactive notice and no mailto action. After receiving and replying to an external test message, set `site.contact.verified` to true. Do not enable it based on DNS alone. A working inquiry channel remains a launch requirement.

Client login moved to footer; sign-in and protected dashboard retained. No legal/privacy routes existed; none were fabricated. An owner-approved privacy notice remains advisable alongside the infrastructure/authentication review.

## Assets and sources

Existing white transparent Blackvale wordmark used unchanged on dark surfaces with its original 6264:1976 proportions and Next image sizing. Blackvale_White_NB is the alternate for light surfaces; no new logo created. The existing icon was resized proportionally through Next.js image optimization to 64×53 (3,461 bytes, down from 2,371,663). A 1200×379 social derivative was also created from the unchanged original (265,778 bytes). Original assets remain intact; it is an unusually wide asset rather than a purpose-built 1200×630 social card. NYC photo excluded because license evidence was unavailable. All new architecture is CSS, no stock-photo license required.

Font source: Google Fonts CSS API, downloaded 2026-10-31. Geist: https://github.com/google/fonts/tree/main/ofl/geist; Instrument Serif: https://github.com/google/fonts/tree/main/ofl/instrumentserif. License text included with each family. Locally loaded through next/font/local; no visitor requests to Google Fonts.
Reference review: https://www.brookfield.com/ and https://www.kkr.com/ for concise hierarchy and organization of business interests; no text, branding, imagery, or layouts copied.

## Existing work preserved

19 files were dirty at entry, all differing only in line endings (`git diff --ignore-space-at-eol --stat` was empty). Baseline binary patch and status saved to `/tmp/blackvale-redesign-baseline/`. Superseded marketing files were inspected before retirement. Existing changes to robots, sitemap, middleware, sign-in/up layouts, next/postcss/tailwind/TypeScript/Vercel configuration, .gitignore and the unused section hook were left untouched. Do not stage those files as part of the redesign.

The robots/sitemap fallback is still https://blackvaleholdings.com; homepage canonical/JSON-LD now consistently use https://www.blackvaleholdings.com. Coordinate fallback/environment consistency with the parallel infrastructure session. No production settings were read or changed, and mailbox activation was not attempted.

## Safe integration

Review screenshots and local site first. Confirm email delivery and business wording. Fetch origin and inspect changes from the concurrent session before staging. Stage only redesign paths, excluding preserved infrastructure changes. Commit on the feature branch, push that branch only when authorized, open a PR, and rerun build/type/lint/browser checks on the combined result. Verify public crawlability and protected-route behavior in a Vercel preview. Merge and deploy production only after owner approval. No remote synchronization was performed during this task.

## Verification

- `npm ci --no-audit --no-fund`: passed using the existing lockfile (127 packages); no package/lockfile change.
- TypeScript: `node node_modules/typescript/bin/tsc --noEmit --incremental false` passed.
- Built-in `npm run lint`: cannot run unattended because the original repository has neither ESLint dependencies nor configuration; it opens Next's setup prompt and exits 1. Isolated ESLint 8.57.1 + eslint-config-next 14.2.33 with core-web-vitals rules passed for app/components/lib/hooks. No lint-tool dependency changes were made to the app.
- Production build: passed, homepage statically generated, route size approximately 1.42 kB, first-load JS 123 kB (including existing Clerk). Browser-data age warnings come from existing dependencies.
- Chromium: real screenshots and axe-core WCAG 2 A/AA, 2.1 AA, and 2.2 AA checks at 1440, 1280, 1024, 768, 390, and 360px. Final contrast pass: zero detected violations at all widths and in mobile navigation, no horizontal overflow, no broken images, exactly one H1. Instrument Serif confirmed in computed styles. Automated checks do not constitute a complete accessibility certification.
- Mobile focus wrapping, Escape dismissal, focus restoration, anchor navigation/focus, and reduced-motion scroll behavior passed.
- Development hero B rendered; production is explicitly gated to A.
- Public homepage, robots, sitemap and sign-in return 200. Unauthenticated dashboard redirects to sign-in. No signed-in test account was used; authenticated financial-data integration is intentionally absent.
- Original repo contains no automated application tests. Browser evidence and screenshots are included under `docs/review/`; test tooling was isolated under `/tmp/blackvale-qa`.
- Changed-source whitespace check passed. Full-repository `git diff --check` still flags pre-existing CRLF changes outside the redesign scope.
- No valid before-redesign Lighthouse baseline was recorded; no before/after performance improvement is claimed.

Local environment notes: dependency installation and repository writes required filesystem approval because the supplied writable path differs in capitalization from the actual Windows path. Browser libraries were unpacked under /tmp instead of installed system-wide. Next's production preview bound to 127.0.0.1 hit a localhost proxy loop; use the literal hostname localhost. Dev file watching needed WATCHPACK_POLLING=true to pick up changes on the Windows mount.
