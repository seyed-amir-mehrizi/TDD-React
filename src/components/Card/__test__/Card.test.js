import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Card from "../Card"

const cardProps = {
    name: 'Sydney',
    phone: '111-1111-111',
    email: 'amir@gmail.com',
    image: {
        url: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fres.cloudinary.com%2Fdk-find-out%2Fimage%2Fupload%2Fq_70%2Cc_pad%2Cw_1200%2Ch_630%2Cf_auto%2FDCTM_Penguin_UK_DK_AL697473_RGB_PNG_namnse.jpg&imgrefurl=https%3A%2F%2Fwww.dkfindout.com%2Fuk%2Fanimals-and-nature%2Fcats%2Fwhat-is-cat%2F&tbnid=6Q6_EcSSvA4vgM&vet=12ahUKEwjkn87LsYz7AhVHaBoKHVG4CmgQMygKegUIARDQAQ..i&docid=F3CARXjHt7pZSM&w=1200&h=630&q=cat&ved=2ahUKEwjkn87LsYz7AhVHaBoKHVG4CmgQMygKegUIARDQAQ`,
        alt: 'cute cat'
    },
    favoured: false
}

describe('Card Component', () => {
    test('should show the name of cat', () => {
        render(<Card
            {...cardProps}
        />)
        expect(screen.getByRole('heading',
            { name: /Sydney/i })).toBeInTheDocument();
    })

    test('should show the phone number of cat', () => {
        render(<Card
            {...cardProps}
        />)
        expect(screen.getByText(/111-1111-111/i)).toBeInTheDocument();
    })

    test('should show the email of the cat', () => {
        render(<Card
            {...cardProps}
        />)
        expect(screen.getByText(/amir@gmail.com/i)).toBeInTheDocument();
    })

    test('should exist image in the card', () => {
        render(<Card
            {...cardProps}
        />)
        expect(screen.getByRole('img', { name: /cute cat/i })).toBeVisible();
    })
    test('should show image with correct url', () => {
        render(<Card
            {...cardProps}
        />)
        expect(screen.getByRole('img', { name: /cute cat/i }).src).toBe(cardProps.image.url);
    })

    test('should show outlined heart', () => {
        render(<Card
            {...cardProps}
        />)
        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
        expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    })
    test('should show filled heart', () => {
        render(<Card
            {...cardProps}
            favoured={true}
        />)
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    })

    test('should toggle heart status', () => {
        render(<Card
            {...cardProps}
        />)
        userEvent.click(screen.getByRole('button'));
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    })
})