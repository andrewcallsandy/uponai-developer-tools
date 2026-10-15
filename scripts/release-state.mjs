export function shouldPublish(remoteIntegrity, localIntegrity, resume) {
 if (!remoteIntegrity) return true;
 if (!resume) throw Error('Version already exists; explicitly resume only after reviewing the partial release');
 if (remoteIntegrity !== localIntegrity) throw Error('Published artifact differs from this build; refusing to resume');
 return false;
}
export function parseRegistryIntegrity(report) {
 const value=Array.isArray(report)&&report.length===1?report[0]:report;
 if(typeof value!=='string'||!/^sha512-[A-Za-z0-9+/]+={0,2}$/.test(value))throw Error('Unexpected npm integrity report');
 return value;
}
