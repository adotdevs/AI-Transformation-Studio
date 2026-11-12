import { invoke } from "@tauri-apps/api/core";

export type EngineStatus = {
  connected: boolean;
  service: string;
};

/** Reads the local engine seam. No network call is made. */
export function getEngineStatus(): Promise<EngineStatus> {
  return invoke<EngineStatus>("engine_status");
}
