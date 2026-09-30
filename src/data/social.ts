// ---------------------------------------------------------------------------
// SOCIAL — handles and follower counts. Confidence noted per field; see
// CONTENT-GUIDE.md for the full audit.
// ---------------------------------------------------------------------------

export type ContentConfidence = "verified" | "reasonably-sourced" | "unverified" | "placeholder";

// Confirmed real via public search results (her Instagram/TikTok pages and
// a Facebook page for "Diane Morrisey Cooking" all exist under these handles).
export const social = {
  instagram: "https://instagram.com/dianemorrisey",
  tiktok: "https://tiktok.com/@dianemorrisey",
  facebook: "https://facebook.com/dianemorriseycooking",
  // Not confirmed to exist — verify before publishing this link.
  pinterest: "https://pinterest.com/dianemorrisey",
  // A YouTube channel exists but no vanity URL was confirmed; placeholder.
  youtube: "https://youtube.com/@dianemorrisey",
} as const;

export const socialConfidence: Record<keyof typeof social, ContentConfidence> = {
  instagram: "verified",
  tiktok: "verified",
  facebook: "verified",
  pinterest: "unverified",
  youtube: "unverified",
};

// Reported counts ranged from 1.5M to 2M+ depending on the source/date —
// confirm the current number with Diane before launch.
export const instagramFollowers = "1.5M+";
export const instagramFollowersConfidence: ContentConfidence = "reasonably-sourced";
