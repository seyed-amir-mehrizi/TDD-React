import { render, screen } from "@testing-library/react"
import Pets from "../Pets"
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import cats from '../../../mocks/cats.json'
const server = setupServer(
    rest.get('http://localhost:4000/cats', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(cats)
        )
    })
)

beforeAll(() => {
    server.listen()
});

afterEach(() => {
    server.resetHandlers();
})
afterAll(() => {
    server.close();
})

describe('Pets component', () => {

    test('should render the correct amount of cards', async () => {
        render(<Pets />);
        const articleElement = await screen.findAllByRole('article')
        expect(articleElement.length).toBe(5);
    })
})