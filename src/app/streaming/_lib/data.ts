export async function wait(milliseconds: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
