import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';

import { ButtonProps } from "./Button.types";
import Button from ".";

describe('Atoms/Button', ()=> {
  const renderButton = (children: string | React.ReactNode, props: ButtonProps) => {
    cleanup()
    const renderResult = render(<Button {...props}>{children}</Button>);
    const button = renderResult.getByTestId('button');

    return { renderResult, button };
  }

  test('testing rendering', ()=> {
    const { button } = renderButton('Hello World!', {});
    expect(button).toBeInTheDocument();
  });

  test('Testing children rendering', () => {
    const { button } = renderButton('Hello world!', {});

    expect(button).toHaveTextContent(/Hello world!/i);
    
    const { button: otherButton } = renderButton('New button text', {});
    expect(otherButton).toHaveTextContent(/New button text/i);
  });

  test('Testing brand classses changes', () => {
    const { button: defaultButton } = renderButton('Hello world!', {});
    const { button: squareButton } = renderButton('Hello world!', { brand: 'square' });
    const { button: roundedButton } = renderButton('Hello world!', { brand: 'rounded' });

    expect(defaultButton).not.toHaveClass('rounded-full');
    expect(squareButton).not.toHaveClass('rounded-full');
    expect(roundedButton).toHaveClass('rounded-full');
  });

  test('Testing type classses changes', () => {
    const { button: defaultButton } = renderButton('Hello world!', {});
    const { button: primaryButton } = renderButton('Hello world!', { type: 'primary' });
    const { button: secondaryButton } = renderButton('Hello world!', { type: 'secondary' });

    expect(defaultButton).toHaveClass('bg-primary');
    expect(primaryButton).toHaveClass('bg-primary');
    expect(secondaryButton).toHaveClass('bg-white');
  });

  test('Testing disabled buttons', () => {
    const { button: enabledButton } = renderButton('Hello world!', { disabled: false }); // ? per default
    const { button: disabledButton } = renderButton('Hello world!', { disabled: true });

    expect(enabledButton).not.toHaveAttribute('disabled');
    expect(disabledButton).toHaveAttribute('disabled');
  });

  test('Testing onClick event', () => {
    const onClick = jest.fn() // ? spy function ( for mocking )
    const { button } = renderButton('Button with onClick event', { onClick });

    expect(onClick).toHaveBeenCalledTimes(0);

    // ? firing event to check if the function is called
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    // ? firing event again
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(2);
  })
}); 