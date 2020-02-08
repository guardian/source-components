# Checkbox

📣 For more context and visual guides relating checkbox usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/466fad)

## Install

```sh
$ yarn add @guardian/src-checkbox @guardian/src-foundations
```

## Use

```js
import { CheckboxGroup, Checkbox } from "@guardian/src-checkbox"

const Form = () => (
    <form>
        <CheckboxGroup name="emails">
            <Checkbox
                value="today-uk"
                label="Guardian Today: UK"
                supporting="The headlines, the analysis, the debate. Get the whole picture from a source you trust."
                checked={true}
            />
            <Checkbox
                value="today-us"
                label="Guardian Today: US"
                supporting={
                    <>
                        <strong>Cut through the noise.</strong> Get straight to
                        the heart of the day’s breaking news in double-quick
                        time.
                    </>
                }
            />
        </CheckboxGroup>
    </form>
)
```

## `CheckboxGroup` Props

### `name`

**`string`**

Gets passed as the name attribute for each checkbox

### `error`

**`string`**

If passed, error styling should applies to this checkbox group. The string appears as an inline error message.

## `Checkbox` Props

### `label`

**`ReactNode`**

Appears to the right of the checkbox. If a visible label is undesirable (e.g. for layout reasons) use `aria-label` instead.

If label is omitted, supporting text will not appear either.

### `supporting`

**`ReactNode`**

Additional text or a component that appears below the label

### `checked`

**`boolean`**

Whether checkbox is checked

### `indeterminate`

**`boolean`**

Whether checkbox is in an indeterminate ("mixed") state

## Supported themes

### Standard

-   `default`
-   `brand`