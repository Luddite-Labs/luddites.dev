# luddites.dev

pnpm monorepo for [Luddite Labs](https://ludditelabs.dev).

## Packages

| Package | Path | Description |
|---------|------|-------------|
| `luddite-labs-client` | [`packages/client`](packages/client) | Marketing site (React, Vite, SSG) |

## Setup

```bash
corepack enable
pnpm install
cp packages/client/.env.example packages/client/.env
```

### Contact form → email (no backend)

Use [Web3Forms](https://web3forms.com) so submissions land in your Gmail:

1. Create an access key at https://web3forms.com (enter your Gmail)
2. Put it in `packages/client/.env`:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. In the Web3Forms dashboard, restrict the key to your domain
4. Restart `pnpm dev` and submit the contact form — you should get an email

The key is public in the client bundle (all `VITE_*` vars are). Domain restriction + Web3Forms spam controls are what protect you. Alternatives: `VITE_CONTACT_ENDPOINT` (e.g. Formspree) or a future `VITE_API_BASE_URL`.

## Scripts

```bash
pnpm dev       # start the client
pnpm build     # SSG build
pnpm preview   # preview production build
pnpm lint      # lint the client
```

## Docker

```bash
docker compose up --build
# or:
docker build -t luddites-dev \
  --build-arg VITE_SITE_URL=https://ludditelabs.dev \
  --build-arg VITE_WEB3FORMS_ACCESS_KEY=your_key \
  .
docker run --rm -p 8080:80 luddites-dev
```

Serves the SSG output with nginx at http://localhost:8080.
