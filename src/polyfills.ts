import process from "process";

if (typeof window !== "undefined") {
  (window as Window & { process?: typeof process }).process = process;
}
