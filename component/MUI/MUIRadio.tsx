import { ChangeEvent, forwardRef, ReactNode, Ref, RefAttributes } from 'react'
import {
    Control,
    FieldError,
    FieldPath,
    FieldValues,
    useController,
    DefaultValues
} from 'react-hook-form'
import {
    FormControl,
    FormControlLabel,
    FormControlLabelProps,
    FormHelperText,
    FormLabel,
    FormLabelProps,
    Radio,
    RadioGroup,
    styled,
    useTheme,
} from '@mui/material'
import { useFormError } from './FormErrorProvider'
import clsx from 'clsx';

const PREFIX = "MUIRadio";
const classes = {
    RadioGroup: `${PREFIX}-RadioGroup`,
    radioLabel: `${PREFIX}-radioLabel`,
    radio: `${PREFIX}-radio`,
    checked: `${PREFIX}-checked`,
    label: `${PREFIX}-label`,
};
const Root = styled("div")(({ theme }) => ({

    [`& .${classes.RadioGroup}`]: {
        flexDirection: "row",
    },
    [`& .${classes.radioLabel}`]: {
        border: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
        borderRadius: theme.spacing(3),
        fontSize: "18px",
        margin: theme.spacing(1),
    },
    [`& .${classes.checked}`]: {
        border: `2px solid ${theme.palette.primary.main}`,
    },
    [`& .${classes.label}`]: {
        fontSize: "18px",
        color: theme.palette.primary.main,
        textTransform: "capitalize"
    },
}));

export type RadioButtonGroupProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    options: { label: string; id: string | number; disabled: boolean }[] | any[]
    helperText?: ReactNode
    name: TName
    required?: boolean
    parseError?: (error: FieldError) => ReactNode
    label?: string
    labelKey?: string
    valueKey?: string
    type?: 'number' | 'string'
    emptyOptionLabel?: string
    onChange?: (value: any) => void
    returnObject?: boolean
    row?: boolean
    control?: Control<TFieldValues>
    labelProps?: Omit<FormControlLabelProps, 'label' | 'control' | 'value'>
    formLabelProps?: Omit<FormLabelProps, 'required' | 'error'>
    disabled?: boolean
    defaultValue?: TFieldValues[TName];
}

type RadioButtonGroupComponent = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
    props: RadioButtonGroupProps<TFieldValues, TName> &
        RefAttributes<HTMLDivElement>
) => JSX.Element

const RadioButtonGroup = forwardRef(function RadioButtonGroup<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
    props: RadioButtonGroupProps<TFieldValues, TName>,
    ref: Ref<HTMLDivElement>
): JSX.Element {
    const {
        helperText,
        options,
        label,
        name,
        parseError,
        labelKey = 'label',
        valueKey = 'id',
        required,
        emptyOptionLabel,
        returnObject,
        row,
        control,
        type,
        labelProps,
        disabled,
        formLabelProps,
        defaultValue,
        ...rest
    } = props
    const theme = useTheme()

    const errorMsgFn = useFormError()
    const customErrorFn = parseError || errorMsgFn

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        rules: required ? { required: 'This field is required' } : undefined,
        disabled,
        control,
        defaultValue: defaultValue
    })

    const renderHelperText = error
        ? typeof customErrorFn === 'function'
            ? customErrorFn(error)
            : error.message
        : helperText

    const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const radioValue = (event.target as HTMLInputElement).value

        const returnValue = returnObject
            ? options.find((items) => items[valueKey] === radioValue)
            : radioValue

        field.onChange(returnValue)
        if (typeof rest.onChange === 'function') {
            rest.onChange(returnValue)
        }
    }

    return (
        <Root>
            <FormControl error={!!error} ref={ref}>
                {label && (
                    <FormLabel {...formLabelProps} required={required} error={!!error} className={classes.label}>
                        {label}
                    </FormLabel>
                )}
                <RadioGroup
                    className={classes.RadioGroup}
                    onChange={onRadioChange}
                    name={name}
                    row={row}
                    value={field.value || ''}
                >
                    {emptyOptionLabel && (
                        <FormControlLabel
                            {...labelProps}
                            control={
                                <Radio
                                    sx={{
                                        color: error ? theme.palette.error.main : undefined,
                                    }}
                                    checked={!field.value}
                                />
                            }
                            label={emptyOptionLabel}
                            value=""
                        />
                    )}
                    {options.map((option: any) => {
                        const optionKey = option[valueKey]

                        if (!optionKey) {
                            console.error(
                                `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
                                option
                            )
                        }
                        let val = returnObject ? field.value?.[valueKey] : field.value

                        if (type === 'number') {
                            val = Number(val)
                        }
                        const isChecked = val === optionKey

                        return (
                            <FormControlLabel
                                className={clsx(classes.radioLabel, { [classes.checked]: isChecked })}
                                {...labelProps}
                                control={
                                    <Radio
                                        className={classes.radio}
                                        sx={{
                                            display: "none",
                                            color: error ? theme.palette.error.main : undefined,
                                        }}
                                        disabled={disabled || option.disabled}
                                        checked={isChecked}
                                    />
                                }
                                value={optionKey}
                                label={option[labelKey]}
                                key={optionKey}
                            />
                        )
                    })}
                </RadioGroup>
                {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
            </FormControl>
        </Root>
    )
})
RadioButtonGroup.displayName = 'RadioButtonGroup'

export default RadioButtonGroup as RadioButtonGroupComponent