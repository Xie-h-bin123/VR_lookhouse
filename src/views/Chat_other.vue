<template>
  <div class="chat-container">
    <div class="chat-messages" ref="chatMessages">
      <div v-for="(message, index) in messages" :key="index" class="chat-message" :class="{ 'from-me': message.fromMe }">
        <div class="chat-message-content">{{ message.content }}</div>
      </div>
    </div>
    <div class="chat-input">
      <input type="text" v-model="inputText" @keyup.enter="sendMessage">
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const inputText = ref('');
    const messages = reactive([]);
    const chatMessages = ref(null);

    const sendMessage = () => {
      if (inputText.value) {
        messages.push({ content: inputText.value, fromMe: true });
        inputText.value = '';
        chatMessages.value.scrollTo(0, chatMessages.value.scrollHeight);
      }
    };

    return { inputText, messages, sendMessage, chatMessages };
  },
};
</script>

<style>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
}

.chat-message {
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  max-width: 60%;
}

.chat-message-content {
  word-break: break-all;
}

.from-me {
  background-color: #eee;
  align-self: flex-end;
}

.chat-input {
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  background-color: #eee;
}

.chat-input input {
  flex: 1;
  margin-right: 8px;
  border: none;
  outline: none;
}

</style>