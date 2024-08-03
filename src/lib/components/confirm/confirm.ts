import { modalManager } from '$lib/common/modals';
import { Subject, type Observable } from 'rxjs';
import Confirm from './confirm.svelte';

export interface ConfirmArgs {
  subject: Subject<boolean>;
  title: string;
  message: string;
  label: string;
}

export const confirmOpen = (title: string, message: string | string[]): Observable<boolean> => {
  const subject = new Subject<boolean>();

  modalManager.open({
    id: 'confirm',
    component: Confirm,
    data: { subject, title, message }
  });

  return subject;
};
