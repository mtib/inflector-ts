import { parse_root } from './inflector/Cargo.toml';

export const parseRoot = (noun: string): string => parse_root(noun);
