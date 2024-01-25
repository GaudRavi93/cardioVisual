export default class LiveActivities {
    /**
     * Enter a live activity
     * @param  {string} activityId
     * @param  {string} token
     * @param  {Function} onSuccess
     * @param  {Function} onFailure
     * @returns void
     */
    enter(activityId: string, token: string, onSuccess?: Function, onFailure?: Function): void;
    /**
     * Exit a live activity
     * @param  {string} activityId
     * @param  {Function} onSuccess
     * @param  {Function} onFailure
     * @returns void
     */
    exit(activityId: string, onSuccess?: Function, onFailure?: Function): void;
}
