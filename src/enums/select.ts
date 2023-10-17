import { AVAILABLE_OPTIONS, PUBLICISED_OPTIONS } from "./product"

export const isAvailableOptions = [
    { id: 1, value: true, label: AVAILABLE_OPTIONS.IN_STOCK },
    { id: 2, value: false, label: AVAILABLE_OPTIONS.OUT_OF_STOCK },
]

export const isPublicisedOptions = [
    { id: 1, value: true, label: PUBLICISED_OPTIONS.NO_PUB },
    { id: 2, value: false, label: PUBLICISED_OPTIONS.WITH_PUB },
]
