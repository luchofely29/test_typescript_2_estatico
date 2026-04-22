import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const VERSION = '1.0';

/**
 * Returns the sum of two numbers.
 */
export const calculateSum = (
  firstValue: number,
  secondValue: number,
): number => firstValue + secondValue;

/**
 * Reads the content of a file as a UTF-8 string.
 *
 * @throws {Error} if the file does not exist
 */
export const readFileContent = (filePath: string): string => {
  if (!existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return readFileSync(filePath, 'utf8');
};

/**
 * Writes content to a file using UTF-8 encoding.
 */
export const writeFileContent = (
  filePath: string,
  content: string,
): void => {
  writeFileSync(filePath, content, 'utf8');
};

/**
 * Compares two strings using SHA-256 digest to
 * mitigate timing attacks.
 */
export const secureCompare = (
  first: string,
  second: string,
): boolean => {
  const firstHash = createHash('sha256')
    .update(first)
    .digest('hex');
  const secondHash = createHash('sha256')
    .update(second)
    .digest('hex');
  return firstHash === secondHash;
};

/**
 * Retrieves the API key from the APP_API_KEY
 * environment variable.
 *
 * @throws {Error} if the environment variable is not set
 */
export const getApiKey = (): string => {
  const apiKey = process.env['APP_API_KEY'];
  if (!apiKey) {
    throw new Error(
      'APP_API_KEY environment variable is not set.',
    );
  }
  return apiKey;
};

export { VERSION };
