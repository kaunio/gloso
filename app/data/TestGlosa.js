
export default class TestGlosa {

  constructor(glosa, requiredAttempts) {
    this.attempts = 0;
    this.failures = 0;
    this.requiredAttempts = requiredAttempts;

    this.glosaId = glosa.counter;
  }
}
