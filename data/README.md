# Portfolio data (front-end only)

All content is stored as static data in this folder. **No database.** Edit JSON/TS files and rebuild to update the site.

## Structure

| File / folder     | Purpose                          |
|-------------------|----------------------------------|
| `profile.json`    | Name, bio, avatar, cover, resume |
| `socials.json`    | Social links (GitHub, LinkedIn…) |
| `services.json`   | Services you offer               |
| `projects.json`   | Projects list                    |
| `skills.json`     | Skills by category               |
| `languages.json`  | Spoken languages                 |
| `fun-facts.json`  | Fun facts                        |
| `education.json`  | Education entries                |
| `experience.json` | Work experience                  |
| `types.ts`        | TypeScript types for all data    |
| `index.ts`        | Single entry point for imports   |

## Future (add when needed)

- **`blogs/`** — one file per post (e.g. `blogs/hello-world.json`) or a single `blogs.json` list. Use `BlogPost` in `types.ts`.
- **`comments/`** — optional: per-post comments (e.g. `comments/{postId}.json`). Use `Comment` in `types.ts`.

Keep adding new JSON files and export them from `index.ts` so the app keeps one clear data layer.
