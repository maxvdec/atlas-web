# Install Atlas Engine

Getting Atlas running locally only takes a few minutes. Follow these steps to download the latest build, verify your environment, and spin up the sample project.

## Prerequisites

- Windows, macOS, or Linux (Ubuntu 22.04+) with administrator privileges
- Latest GPU drivers installed
- [CMake 3.27+](https://cmake.org/download/) and [Ninja](https://ninja-build.org/) available on your `PATH`
- A recent version of [Visual Studio Code](https://code.visualstudio.com/) or another IDE of your choice

> 💡 We ship prebuilt binaries so you can try Atlas without compiling from source.

## 1. Download the installer

1. Visit the [Atlas releases page](/overview/releases) and grab the most recent build.
2. Extract the archive; inside you will find the `atlas` executable plus example projects.
3. Make the binary executable if you are on macOS or Linux:

```bash
chmod +x atlas
```

## 2. Link optional toolchains

Atlas automatically detects major IDEs and compilers. If you want to target additional platforms, set the following environment variables before launching:

```bash
export ATLAS_VULKAN_SDK="/opt/vulkan-sdk"
export ATLAS_ANDROID_NDK="/opt/android-ndk"
```

## 3. Create a Project

```bash
./atlas create myProject
```
## Troubleshooting

- **Driver crashes** – update to the latest NVIDIA or AMD drivers and retry.
- **Missing DLLs on Windows** – install the [Microsoft Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe).
- **Permission denied** – ensure the `atlas` binary has execute permissions (`chmod +x atlas`).

Need more help? Open a discussion on [GitHub](https://github.com/maxvdec/atlas/discussions).
