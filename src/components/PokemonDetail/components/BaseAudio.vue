<template>
  <div class="audio-player">
    <audio ref="audio" :src="selectedAudio" controls></audio>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    audioSrc: {
      type: Object as PropType<{ latest?: string; legacy?: string }>,
      required: true,
    },
  },
  setup(props) {
    const audioRef = ref<HTMLAudioElement | null>(null);

    const selectedAudio = props.audioSrc.latest || props.audioSrc.legacy || '';

    const playAudio = () => {
      if (audioRef.value) {
        audioRef.value.play();
      }
    };

    const pauseAudio = () => {
      if (audioRef.value) {
        audioRef.value.pause();
      }
    };

    return {
      audioRef,
      selectedAudio,
      playAudio,
      pauseAudio,
    };
  },
});
</script>

<style scoped>
.audio-player {
  display: flex;
  align-items: center;
}
</style>
