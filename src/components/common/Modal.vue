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
                class="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/80 bg-opacity-50"
                @click="handleBackdropClick"
            >
                <div class="w-full">
                    <div
                        v-if="modelValue"
                        class="bg-[#272727] mb-4 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden"
                        @click.stop
                    >
                        <slot></slot>
                    </div>
                    <button
                        v-if="showCloseButton"
                        @click="closeModal"
                        class="text-black font-semibold text-lg bg-white rounded-lg shadow-xl w-full p-3"
                    >
                        Vazgec
                    </button>
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
