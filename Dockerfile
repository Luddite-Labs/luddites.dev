# syntax=docker/dockerfile:1

# --- Build static SSG site ---
FROM node:22-bookworm-slim AS build

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/client/package.json ./packages/client/

RUN pnpm install --frozen-lockfile

COPY packages/client ./packages/client

ARG VITE_SITE_URL=https://luddites.dev
ARG VITE_WEB3FORMS_ACCESS_KEY=
ARG VITE_CONTACT_ENDPOINT=
ARG VITE_API_BASE_URL=
ENV VITE_SITE_URL=$VITE_SITE_URL \
    VITE_WEB3FORMS_ACCESS_KEY=$VITE_WEB3FORMS_ACCESS_KEY \
    VITE_CONTACT_ENDPOINT=$VITE_CONTACT_ENDPOINT \
    VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN pnpm build

# --- Serve with nginx ---
FROM nginx:1.27-alpine AS runtime

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/client/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
