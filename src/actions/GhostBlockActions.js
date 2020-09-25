export const MOUNT_GHOST_BLOCK = "MOUNT_GHOST_BLOCK";

export function mountGhostBlockAction(ref) {
  return {
    type: MOUNT_GHOST_BLOCK,
    payload: ref,
  };
}
