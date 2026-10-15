export function shouldPublish(remoteIntegrity, localIntegrity, resume) {
 if (!remoteIntegrity) return true;
 if (!resume) throw Error('Version already exists; explicitly resume only after reviewing the partial release');
 if (remoteIntegrity !== localIntegrity) throw Error('Published artifact differs from this build; refusing to resume');
 return false;
}
