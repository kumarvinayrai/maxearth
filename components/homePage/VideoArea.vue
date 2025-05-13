<template> 
  <section class="video-area">
    <div class="container-fluid px-0">
      <div
        class="video-content d-flex justify-content-center align-items-center"
        :style="videoData.background ? `background-image: url(${videoData.background})` : ''"
      >
        <div class="row w-100">
          <div class="col-12 d-flex justify-content-center">
            <div class="video-wrapper">
              <a
                class="play-btn popup-youtube"
                :href="videoData.videoUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videoData = ref({
  background: '',
  videoUrl: ''
});

const loadVideoData = async () => {
  try {
    const response = await fetch('/data/VideoArea.txt');
    const text = await response.text();

    const lines = text.split('\n').filter(line => line.trim() && !line.startsWith('#'));

    lines.forEach(line => {
      const separatorIndex = line.indexOf('=');
      if (separatorIndex > -1) {
        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();

        if (key === 'background' || key === 'videoUrl') {
          videoData.value[key] = value;
        }
      }
    });
  } catch (error) {
    console.error('Failed to load video data:', error);
  }
};

onMounted(() => {
  loadVideoData();
});
</script>
