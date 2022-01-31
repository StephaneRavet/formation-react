import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe("Contact", () => {
    it('should render properly', () => {
        render(<Contact />)
        expect(screen.getByRole('heading')).toHaveTextContent('Demande de contact')
        expect(screen.getByPlaceholderText('name@example.com')).not.toBeDisabled()
        expect(screen.getByRole('button')).toHaveTextContent('Envoyer')
        expect(screen.getByTestId('trucbidule')).not.toBeDisabled()
    })
})