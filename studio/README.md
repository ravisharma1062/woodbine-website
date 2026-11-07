# Woodbine School admin (Sanity Studio)

This is the screen where school staff add notices, photo albums and videos.
The website reads them automatically (it checks for new content about once a minute).

## One-time setup (done by whoever looks after the website)

Run these in a terminal, inside this `studio` folder.

1. Install: `npm install`
2. Log in to Sanity (opens the browser; create a free account if you do not have one):
   `npx sanity login`
3. Create the project. The dataset must be **public** because the website reads it without a password:
   `npx sanity projects create "Woodbine School" --dataset production --dataset-visibility public`
   It prints a **project ID** (about 8 letters and numbers). Keep it.
4. Create a file called `.env` in this folder:
   ```
   SANITY_STUDIO_PROJECT_ID=<the project ID>
   SANITY_STUDIO_HOST=woodbine-school
   ```
   (`SANITY_STUDIO_HOST` becomes the admin address. Pick another name if this one is taken.)
5. Publish the admin screen: `npx sanity deploy`
   The admin address will be `https://woodbine-school.sanity.studio`.
6. Connect the website: in Render, open the `woodbine-website` service, go to Environment, and add
   `NEXT_PUBLIC_SANITY_PROJECT_ID` = the project ID. Render redeploys by itself.
7. Invite the school staff: https://www.sanity.io/manage > the project > Members > Invite.
   Give them the **Editor** role.

For local testing, put the same `NEXT_PUBLIC_SANITY_PROJECT_ID=<id>` in a `.env.local` file in the main project folder.

Until step 6 is done the website keeps showing its built-in sample content.
Once it is connected, the website shows only what is in the admin, so an empty admin means empty pages.

## Daily use (for the school admin)

Open the admin address and log in.

- **Notice**: click *Notice* > *+*. Fill the title and details in English and/or Hindi, pick the date and category,
  attach a PDF if there is one, then click **Publish**.
- **Photo album**: click *Photo album* > *+*. Give it a name, drag in the photos, **Publish**.
  An album with no photos is not shown on the website.
- **Video**: upload the video to YouTube first, then click *Video* > *+*, paste the YouTube link, **Publish**.

Tips:
- Hindi and English are both optional, but write at least one. If one is empty the website shows the other.
- Nothing appears on the website until you click **Publish**.
- To remove something, open it, click the three dots at the bottom right, and choose **Delete**.
- Changes show up on the website within about a minute.

## What is where

| File | What it does |
|---|---|
| `schemaTypes/notice.ts` | the Notice form |
| `schemaTypes/album.ts` | the Photo album form |
| `schemaTypes/video.ts` | the Video form |
| `schemaTypes/localized.ts` | the English + Hindi fields |
| `../src/lib/content.ts` | how the website reads these from Sanity |
