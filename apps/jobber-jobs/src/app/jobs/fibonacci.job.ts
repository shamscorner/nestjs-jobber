import { PulsarClient } from '@jobber/pulsar';
import { job } from '../decorators/job.decorator';
import { AbstractJob } from './abstract.job';

@job({
  name: 'Fibonacci',
  description: 'Generate a Fibonacci sequence and store in the DB.',
})
export class FibonacciJob extends AbstractJob {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
