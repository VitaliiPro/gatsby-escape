import * as React from "react"
import { Title, Line } from "../index-style-components/index.style"
import { FooterContainer, FooterForm, FormSubmit } from "./footer.style"
import "./footer.style"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterForm>
        <Title>
          <h3>Stay in Touch</h3>
          <Line />
        </Title>
        <FormSubmit>
          <form>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Enter your email address"
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </FormSubmit>
      </FooterForm>
    </FooterContainer>
  )
}

export default Footer
