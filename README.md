# modal-component-oc-hk-1

This component must work with a react project such as [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the project directory, you can run:

`npm i modal-component-oc-hk-1`

or

`yarn add modal-component-oc-hk-1`

### Usage

1. First import the Modal (import { Modal } from "modal-component-oc-hk-1/dist/index")

2. In the same file, add then the function that toggles the modal (import { toggleModal } from 'modal-component-oc-hk-1/dist/components/Modal')

3. Add the modal component where desired and use the `message` prop to change the modal message if you so wish

For example :

```
export default function AppTest () {
    return (
        <Modal
            message={'Hello!'}
        >
    )
}
```
