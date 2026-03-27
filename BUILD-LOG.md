# Build Log — Checkr Trust Wireframe

## Step 1: Scaffold (completed 2026-03-26)

### Judgment calls

- **Tailwind v4 plugin** — used `@tailwindcss/vite` (v4 approach) instead of the v3 PostCSS plugin, since Vite was already on the latest stack. The `@import "tailwindcss"` directive in `base.css` replaces the v3 directives.

- **LinkedIn URL** — no official Checkr Trust LinkedIn URL was provided. Used `https://www.linkedin.com/company/checkrtrust` as a reasonable placeholder. Needs to be confirmed by the client.

- **Log in link** — spec says "external link to client portal" but no URL was provided. Placeholder set to `#` in both Nav and Footer. Needs real URL.

- **API Documentation URL** — spec references `https://docs.checkrtrust.com` explicitly; used that.

- **"Ebooks and Guides" / "Webinars and Events"** — rendered in the Resources dropdown as disabled items with a "Coming soon" label, per spec. Also omitted from footer (spec only lists Customer Stories, Blog, API Docs under Resources).

- **`index.css` removed** — the default Vite `index.css` was not deleted but is no longer imported; `src/styles/base.css` is the single stylesheet imported in `main.jsx`. The old `App.css` is also orphaned. Both can be deleted before Step 2 to avoid confusion.

- **Page file structure** — pages are organized into subdirectories (`products/`, `industries/`, `resources/`, `legal/`) to keep the `pages/` folder manageable as content is added.

### Routes generated

| Route | Component |
|---|---|
| `/` | Home |
| `/products/criminal-and-public-records-checks` | CriminalRecords |
| `/products/identity-checks` | IdentityChecks |
| `/products/driver-checks` | DriverChecks |
| `/industries/caregiving` | Caregiving |
| `/industries/financial-institutions` | FinancialInstitutions |
| `/industries/online-dating` | OnlineDating |
| `/industries/ridesharing` | Ridesharing |
| `/industries/short-term-rentals` | ShortTermRentals |
| `/industries/vehicle-rental-and-sharing` | VehicleRental |
| `/industries/visitor-management-systems` | VisitorManagement |
| `/resources/customer-stories` | CustomerStories |
| `/resources/customer-stories/:slug` | CustomerStoryDetail |
| `/blog` | Blog |
| `/blog/:slug` | BlogArticle |
| `/get-a-demo` | GetADemo |
| `/get-a-demo/success` | DemoSuccess |
| `/legal/tessera-privacy-policy` | TesseraPrivacy |
| `/legal/inflection-privacy-policy` | InflectionPrivacy |
