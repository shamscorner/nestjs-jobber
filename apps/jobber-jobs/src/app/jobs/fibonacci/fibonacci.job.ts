import { PulsarClient } from '@jobber/pulsar';
import { job } from '../../decorators/job.decorator';
import { AbstractJob } from '../abstract.job';
import { FibonacciData } from './fibonacci-data.message';

@job({
  name: 'Fibonacci',
  description: 'Generate a Fibonacci sequence and store in the DB.',
})
export class FibonacciJob extends AbstractJob<FibonacciData> {
  protected messageClass = FibonacciData;

  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
