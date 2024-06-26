
import { FormEvent } from "react"

function numberdaysmonth(event: FormEvent<HTMLInputElement>) {
    Object.assign(event.currentTarget, {
        maxLength: 2,
    })

    const { value } = event.currentTarget
    Object.assign(event.currentTarget, {
        value: value
            .replace(/\D/g, '')
    })
}

function number(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget
    Object.assign(event.currentTarget, {
        value: value
            .replace(/\D/g, '')
    })
}

function phone(event: FormEvent<HTMLInputElement>) {
    Object.assign(event.currentTarget, {
        maxLength: 15,
    })

    const { value } = event.currentTarget

    if (value.length === 11) {
        Object.assign(event.currentTarget, {
            value: value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3')
        })
    } else {
        Object.assign(event.currentTarget, {
            value: value.replace(/\D/g, '')
        })
    }

}

function cpf(event: FormEvent<HTMLInputElement>) {
    Object.assign(event.currentTarget, {
        maxLength: 14,
    })

    const { value } = event.currentTarget

    if (value.length === 11) {
        Object.assign(event.currentTarget, {
            value: value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, '$1.$2.$3-$4')
        })
    } else {
        Object.assign(event.currentTarget, {
            value: value.replace(/\D/g, '')
        })
    }

}

function cnpj(event: FormEvent<HTMLInputElement>) {
    Object.assign(event.currentTarget, {
        maxLength: 18,
    })

    const { value } = event.currentTarget

    Object.assign(event.currentTarget, {
        value: value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/, '$1.$2')
            .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/\.(\d{3})(\d)/, '.$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
    })
}

function percent(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget

    Object.assign(event.currentTarget, {
        value: value.replace(/\D/g, '').replace(/([0-9]{2})$/g, ',$1'),
    })

    if (value.length > 6) {

        Object.assign(event.currentTarget, {
            value: value
                .replace(/\D/g, '')
                .replace(/([0-9]{2})$/g, ',$1')
                .replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2'),
        })
    }

    if (value.length > 9) {
        Object.assign(event.currentTarget, {
            value: value
                .replace(/\D/g, '')
                .replace(/([0-9]{2})$/g, ',$1')
                .replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
                .replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '$1.$2,$3'),
        })
    }

    if (value.length >= 11) {
        Object.assign(event.currentTarget, {
            value: value
                .replace(/\D/g, '')
                .replace(/([0-9]{2})$/g, ',$1')
                .replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
                .replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3')
                .replace(
                    /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
                    '.$1.$2.$3,$4'
                ),
        })
    }
    if (value.length >= 14) {
        Object.assign(event.currentTarget, {
            value: value
                .replace(/\D/g, '')
                .replace(/([0-9]{2})$/g, ',$1')
                .replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
                .replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3')
                .replace(
                    /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
                    '$1.$2.$3,$4'
                ),
        })
    }
}

function currency(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget

    Object.assign(event.currentTarget, {
        value: value.replace(/\D/g, '').replace(/([0-9]{2})$/g, ',$1'),
    })

    if (value.length > 6) {

        Object.assign(event.currentTarget, {
            value: value
                .replace(/\D/g, '')
                .replace(/([0-9]{2})$/g, ',$1')
                .replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2'),
        })
    }

    if (value.length > 9) {
        Object.assign(event.currentTarget, {
            value: value
                .replace(/\D/g, '')
                .replace(/([0-9]{2})$/g, ',$1')
                .replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
                .replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '$1.$2,$3'),
        })
    }

    if (value.length >= 11) {
        Object.assign(event.currentTarget, {
            value: value
                .replace(/\D/g, '')
                .replace(/([0-9]{2})$/g, ',$1')
                .replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
                .replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3')
                .replace(
                    /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
                    '.$1.$2.$3,$4'
                ),
        })
    }
    if (value.length >= 14) {
        Object.assign(event.currentTarget, {
            value: value
                .replace(/\D/g, '')
                .replace(/([0-9]{2})$/g, ',$1')
                .replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
                .replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3')
                .replace(
                    /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
                    '$1.$2.$3,$4'
                ),
        })
    }

}

function defaultValue(e: any) { }

function cep(event: FormEvent<HTMLInputElement>) {
    Object.assign(event.currentTarget, {
        maxLength: 9,
    })

    const { value } = event.currentTarget

    Object.assign(event.currentTarget, {
        value: value
            .replace(/\D/g, '')
            .replace(/^(\d{5})(\d)/, "$1-$2")
    })
}

export default {
    cnpj,
    percent,
    currency,
    defaultValue,
    number,
    numberdaysmonth,
    cpf,
    cep,
    phone
}
