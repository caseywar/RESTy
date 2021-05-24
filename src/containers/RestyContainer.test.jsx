import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {setupServer} from 'msw/node';
import { rest } from 'msw';
import RestyContainter from './RestyContainer';

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
        return res(ctx.json([
            {
              "quote": "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
              "character": "Lisa Simpson",
              "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
              "characterDirection": "Right"
            }
          ]))
    })
)

describe('Resty Container', () => {
    beforeAll(()=> server.listen());
    afterAll(()=> server.close());

    it('renders a JSON body from a API call input into the url entry', async () => {
        render(<RestyContainter />);

        const urlBar = screen.getByPlaceholderText('api url');
        userEvent.type(urlBar, 'https://thesimpsonsquoteapi.glitch.me/quotes');

        const getButtonClick = screen.getByTestId('get');
        userEvent.click(getButtonClick);

        const fetch = await screen.findByRole('button', {name: 'fetch-button'});
        userEvent.click(fetch);

    })
})