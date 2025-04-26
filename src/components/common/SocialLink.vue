<<template>
  <li class="social-item">
    <a :href="url" class="social-link" target="_blank" rel="noopener noreferrer">
      <component :is="platformIcon" class="social-icon" />
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import {
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon
} from 'lucide-vue-next';

export default defineComponent({
  components: {
    LinkedinIcon,
    TwitterIcon,
    InstagramIcon
  },
  props: {
    platform: {
      type: String,
      required: true,
      validator: (value: string) => ['linkedin', 'twitter', 'instagram'].includes(value)
    },
    url: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const platformIcon = computed(() => {
      switch(props.platform) {
        case 'linkedin': return 'LinkedinIcon';
        case 'twitter': return 'TwitterIcon';
        case 'instagram': return 'InstagramIcon';
        default: return 'LinkedinIcon';
      }
    });

    return {
      platformIcon
    };
  }
});
</script>

<style scoped>
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--white-1);
  transition: all var(--transition-1);
}

.social-link:hover {
  background-color: var(--orange-yellow-crayola);
  transform: translateY(-3px);
}

.social-link ion-icon {
  color: var(--smoky-black);
  font-size: 18px;
  transition: color var(--transition-1);
}

.social-link:hover ion-icon {
  color: var(--white-1);
}
</style>