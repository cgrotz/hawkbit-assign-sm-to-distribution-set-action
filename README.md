# hawkbit-assign-sm-to-distribution-set-action

GitHub Action for assigning software modules to distribution sets in Hawkbit.

## Usage

### Example Workflow file

An example workflow:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Assign Sotware Module to Distributon Set
      uses: cgrotz/hawkbit-assign-sm-to-distribution-set-action@v1
      with:
        software-module-id: 12345
        distribution-set-id: 67890
        hawkbit-tenant: ${{ secrets.ROLLOUTS_TENANT }}
        hawkbit-username: ${{ secrets.ROLLOUTS_USERNAME }}
        hawkbit-password: ${{ secrets.ROLLOUTS_PASSWORD }}
```
