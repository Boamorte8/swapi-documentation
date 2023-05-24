import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import routes from '../../router'
import AppHeader from '../AppHeader.vue'

describe('AppHeader', () => {
  it('renders properly', async () => {
    const { findByRole } = render(AppHeader, {
      global: {
        plugins: [routes]
      }
    });

    const button = await findByRole('link');
    const img = await findByRole('img');

    expect(button).toBeDefined();
    expect(img).toBeDefined();
    expect(button.getAttribute('href')).toEqual('/');
    expect(img.getAttribute('alt')).toEqual('Star Wars logo');
    expect(img.getAttribute('src')).toEqual('/src/assets/swlogo.webp');
  })
})
