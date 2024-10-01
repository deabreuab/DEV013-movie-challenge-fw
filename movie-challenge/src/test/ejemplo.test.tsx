import { render, screen } from "@testing-library/react"
import App from "../App"

describe("Casos de ejemplo", () => {
    it('Renderizar aplicacion', () => {
        render(<App/>);
        screen.debug()

        const elemento = screen.getByText('Vite + React')
        expect(elemento).toBeTruthy()
    })
})