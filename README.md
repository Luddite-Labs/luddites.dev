# luddites.dev

pnpm monorepo for [Luddite Labs](https://luddites.dev).

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

The key is public in the client bundle (all `VITE_*` vars are). Domain restriction + Web3Forms spam controls are what protect you.

## Scripts

```bash
pnpm dev       # start the client
pnpm build     # SSG build
pnpm preview   # preview production build
pnpm lint      # lint the client
```
