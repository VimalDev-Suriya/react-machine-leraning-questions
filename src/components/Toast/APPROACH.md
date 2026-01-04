# Toast Component Creation (LLD Approch)

## Requirement Gathering:

### Core requirements:

1. Show multiple toast
2. Auto dismissable toast
3. Manually dismissable
4. Types (Success, failure, warning & info)
5. Stack the Toast

## Low level Design:

1. Toast Container (will holds the list of individual Toast)
2. Toast Item (Individual Toast)
3. Toast Provider (Managing the List of Toast)
4. Toast custom hook (reuablity)

## Toast Source of Truth

```ts
Toast {
  id: string
  message: string | ReactNode
  type: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  position?: 'top-right' | 'bottom-left'
  isClosable?: boolean
}

```
