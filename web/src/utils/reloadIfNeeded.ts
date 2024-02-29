export function reloadIfNeeded() {
    if (typeof window !== 'undefined') {
        if (/webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            location.reload();
        }
    }
}