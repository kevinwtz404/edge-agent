import { getMockSignals } from './mock.js';

export function createConnectors() {
  return {
    getSignals: async () => getMockSignals()
  };
}
