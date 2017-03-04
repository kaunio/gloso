
export default class TestGlosa {

  constructor(glosa, requiredAttempts, leftSide) {
    this.attempts = 0;
    this.failures = 0;
    this.requiredAttempts = requiredAttempts;
    this.leftSide = leftSide;
    this.streak = 0;

    this.glosa = glosa;
  }
}
