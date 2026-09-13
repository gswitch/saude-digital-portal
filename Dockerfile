FROM denoland/deno:2.9.6 AS build
WORKDIR /app
COPY deno.json deno.lock ./
# Deps npm com bindings nativos de Linux (tailwind oxide, lightningcss)
RUN deno install --frozen
COPY . .
# vite build → public/assets, depois deno compile → ./portal com public/ embutido
RUN deno task build:exe

FROM gcr.io/distroless/cc-debian12:nonroot
WORKDIR /app
COPY --from=build /app/portal /app/portal
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["/app/portal"]
