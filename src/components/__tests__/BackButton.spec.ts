import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import routes from '../../router'
import BackButton from '../BackButton.vue'

describe('BackButton', () => {
  it('renders properly', async () => {
    const { findByTestId } = render(BackButton, {
      global: {
        plugins: [routes]
      },
      props: { to: '/' }
    });

    const button = await findByTestId('back-button');

    expect(button).toBeDefined();
    expect(button.getAttribute('href')).toEqual('/');
    expect(button.innerHTML).toContain('Back');
  })
})
