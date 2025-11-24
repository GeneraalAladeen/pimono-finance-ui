<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition-opacity ease-out duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity ease-in duration-150"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="modelValue"
                class="fixed inset-0 z-50 p-4 bg-[#242529]/70 items-center backdrop-blur-xl flex-1 flex flex-col"
                @click="handleBackdropClick"
            >
                <div
                    v-if="modelValue"
                    class="mb-4 flex-1 flex flex-col items-center justify-center max-w-md max-h-[90vh] overflow-hidden gap-6"
                    @click.stop
                >
                    <slot></slot>
                </div>
                <div class="text-center">
                    <button
                        v-if="showCloseButton"
                        @click="closeModal"
                        class="text-black font-semibold text-lg bg-white rounded-full shadow-xl p-3"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <p>Anladim</p>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    showCloseButton: {
        type: Boolean,
        default: true,
    },
    closeOnBackdrop: {
        type: Boolean,
        default: true,
    },
    closeOnEscape: {
        type: Boolean,
        default: true,
    },
})

const emit = defineEmits(['update:modelValue', 'close', 'open'])

const handleEscape = (e) => {
    if (e.key === 'Escape' && props.closeOnEscape && props.modelValue) {
        closeModal()
    }
}

watch(
    () => props.modelValue,
    (newValue) => {
        if (newValue) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
            emit('open')
        } else {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
            emit('close')
        }
    },
)

const closeModal = () => {
    emit('update:modelValue', false)
    emit('close')
}

const handleBackdropClick = () => {
    if (props.closeOnBackdrop) {
        closeModal()
    }
}
</script>
